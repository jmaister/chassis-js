
export interface ParseResult {
    ok: boolean
    error: string
    
}

export function parseVIN(vin: string): string {
  return vin.toUpperCase()
}