import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = () => {
  //Update endpoint after back-end is ready
  return axios.post('localhost:3333', `
    
  `)
}

export function useProducts(){
  const { } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })
}