export interface ManifestPluginOptions {
  icon?: string
  icons?: Array<IconConfig>
  legacy?: boolean
  theme_color_in_head?: boolean
  cache_busting_mode?: CacheBustingMethod
  crossOrigin?: string
  icon_options?: IconConfig
  include_favicon?: boolean
  [propName: string]: any
}

export type CacheBustingMethod = 'name' | 'query' | 'none'

export interface pathObject {
  [key: string]: boolean | undefined
}

export interface IconConfig {
  src: string
  sizes: string
  type: string
  [propName: string]: string
}
