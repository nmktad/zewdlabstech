import { makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { FAQ } from "./src/contentlayer/documents/faq";
import { LegalPost } from "./src/contentlayer/documents/legal";
import { Post } from "./src/contentlayer/documents/post";
import { Unrelated } from "./src/contentlayer/documents/unrelated";
import autolinkHeadings from "./src/contentlayer/plugins/autolink-headings";
import prettyCode from "./src/contentlayer/plugins/pretty-code";

export default makeSource({
  contentDirPath: "./src/contents",
  documentTypes: [Post, LegalPost, FAQ, Unrelated],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, prettyCode, autolinkHeadings],
  },
});
