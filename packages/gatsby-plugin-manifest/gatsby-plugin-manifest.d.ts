declare module "common" {
    import { IconConfig, CacheBustingMethod } from 'gatsby-plugin-manifest/types/common';
    export const defaultIcons: Array<IconConfig>;
    /**
     * Check if the icon exists on the filesystem
     *
     * @param srcIcon Path of the icon
     */
    export function doesIconExist(srcIcon: string): boolean;
    /**
     * @param path The generic path to an icon
     * @param digest The digest of the icon provided in the plugin's options.
     */
    export function addDigestToPath(path: string, digest: string, method: CacheBustingMethod): string;
}
declare module "gatsby-node" { }
declare module "gatsby-ssr" { }
