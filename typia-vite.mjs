import { fileURLToPath } from 'node:url';
import ttsc from '@ttsc/unplugin/vite';

const project = fileURLToPath(new URL('./tsconfig.typia.json', import.meta.url));

/**
 * Compiles the Typia call sites in src/schemas/ into generated validators and
 * JSON Schema metadata. Astro's content config and the CMS editor both load
 * those modules through this Vite pipeline.
 *
 * @returns {import('vite').Plugin[]}
 */
export function schemaTypia() {
  const plugins = ttsc({ project });
  return (Array.isArray(plugins) ? plugins : [plugins]).map((plugin) => {
    const transform = plugin.transform;
    if (!transform) return plugin;
    const hook = typeof transform === 'function' ? { handler: transform } : transform;
    return { ...plugin, transform: { ...hook, filter: { ...hook.filter, id: /[\\/]src[\\/]schemas[\\/]/ } } };
  });
}
