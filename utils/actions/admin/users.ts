"use server";

import { clerkClient } from "@clerk/nextjs/server";

export async function fetchClerkUsers() {
  const client = await clerkClient();

  // Fetch up to 100 users, ordered by newest first
  const { data } = await client.users.getUserList({
    limit: 100,
    orderBy: "-created_at",
  });

  return data.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0]?.emailAddress,
    imageUrl: user.imageUrl,
    createdAt: user.createdAt,
    lastSignIn: user.lastSignInAt,
  }));
}

export async function fetchClerkUser(id: string) {
  const client = await clerkClient();

  // Fetch up to 100 users, ordered by newest first
  const { data } = await client.users.getUserList({
    limit: 100,
    orderBy: "-created_at",
  });

  const users = data.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0]?.emailAddress,
    imageUrl: user.imageUrl,
    createdAt: user.createdAt,
    lastSignIn: user.lastSignInAt,
  }));
  return users.find((user) => user.id === id)
}

