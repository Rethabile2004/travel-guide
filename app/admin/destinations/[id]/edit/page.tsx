import {  getCityByid } from "@/utils/actions/admin/destinations";
import EditCityForm from "./EditCityForm";

export default async function EditCity({ params }: { params: { id: string } }) {
  const { id } = await params
  const city = await getCityByid(id);
  if(!city){
    return
  }
  return (
    <EditCityForm id={id} city={city} key='edit_city'/>
  );
}
