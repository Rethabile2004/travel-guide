"use server"

import { Guide } from "@/app/generated/prisma/client"
import prisma from "../db"

type GuideType = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  isPremium: boolean;
  city: {
    slug: string;
    name: string;
    province: string
  };
}

export async function getGuides(province?: string, search?: string) {

  const guides = await prisma.guide.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      isPremium: true,
      city: {
        select: {
          name: true,
          slug: true,
          province: true
        },
      },
    },
  })
  let filterGuides: GuideType[] = guides;
  if (province) {
    const filtered = searchProvince(province, filterGuides)
    filterGuides = filtered
  }

  if (search) {
    const filtered = searchCity(search, filterGuides)
    return filtered
  }
  return guides
}

export async function getGuideBySlug(slug: string) {

  return prisma.guide.findUnique({
    where: { slug },
    include: {
      city: {
        select: {
          name: true,
          slug: true,
          heroImageUrl: true,
          description: true,
          province: true
        },
      },
    },
  })
}

export async function getForHomePageGuides() {
  const latest = await prisma.guide.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return [latest[0], latest[1], latest[2]]
}

export async function getCityGuides(cityId: string, excludeGuideId?: string) {
  return prisma.guide.findMany({
    where: {
      cityId,
      id: excludeGuideId ? { not: excludeGuideId } : undefined,
    },
    orderBy: { createdAt: "desc" },
  })
}

const searchProvince = (province: string, guides: GuideType[]) => {
  // const searchProvince=province
  // if (province.includes('_')) {
  //   searchProvince.replace('_',' ');
  // }
  let searchedGuides: GuideType[] = [];
  if (province) {
    searchedGuides = guides.filter((c) => {
      const match = c.city.province.toLowerCase().includes(province.toLowerCase())
      if(match)return c
    })
    return searchedGuides
  }
  return guides;
}

const searchCity = (search: string, cities: GuideType[]) => {
  let searchedCities: GuideType[] = [];
  if (search) {
    searchedCities = cities.filter((c) => {
      const match = c.city.province.toLowerCase().includes(search.toLowerCase())
      const province = c.city.name.toLowerCase().includes(search.toLowerCase())
      return match || province
    })
    return searchedCities
  }
  return cities;

}