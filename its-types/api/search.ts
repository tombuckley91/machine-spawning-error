interface SearchHitVariant {
  backorder_note: string | null
  size: string
  color: string
  parent_sku: string
  qty: number
  backorder_label: string
  id: number
  sku: string
  backorder_type: string
}

interface SearchHitSizes {
  backorder_note: null
  updated_at: string
  size: string
  qty: number
  backorder_label: string
  id: number
  sku: string
  backorder_type: string
}

interface SearchHitCategory {
  path: string
  name: string
  id: number
}

interface SearchHitPrice {
  [storeCode: string]: {
    rrp: number
    price: number
  }
}

interface SearchHitPriceRange {
  from: number
  to: number
}

export interface SearchHit {
  color: string
  isGiftCard: boolean
  link: string
  variants: Array<SearchHitVariant>
  only_show_in_hidden_category: number
  colors: Array<string>
  rrp: number
  product_type: Array<string>
  sizes: Array<SearchHitSizes>
  price: number
  shop_the_look: Array<string>
  name: string
  id: number
  categories: Array<SearchHitCategory>
  sku: string
  prices: SearchHitPrice
  priceRange: SearchHitPriceRange
  live_date: string
  publish_date: string
}
