import { SearchHit } from "../api/search"

export interface SDKServices {
  search: (searchTerm: string) => Promise<Array<SearchHit>>
}
