import { conlocaData, conlocaFragments, conlocaPages } from "@conloca/astro-cms/node/content";
import { dataSchemas, pageSchemas } from "./schemas/data";

// `pages` is the single page collection: the catch-all route serves home and
// posts (filed at content/default/pages/blog/) from it. `posts` exists only as
// a fragment folder (content/fragments/posts/) — conlocaFragments declares it
// and the aggregate __conloca_fragments collection indexes every fragment.
export const collections = {
    pages: conlocaPages({ pageSchemas }),
    ...conlocaData({ dataSchemas }),
    ...conlocaFragments("posts"),
};
