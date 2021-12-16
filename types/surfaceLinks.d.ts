import { HtmlLinkDescriptor } from "@remix-run/server-runtime";
declare type LinksExported = {
    links: () => HtmlLinkDescriptor[];
};
declare function surfaceLinks(...entities: (HtmlLinkDescriptor | LinksExported)[]): () => HtmlLinkDescriptor[];
export default surfaceLinks;
