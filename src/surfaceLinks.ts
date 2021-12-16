import { HtmlLinkDescriptor } from "@remix-run/server-runtime";

type LinksExported = {
  links: () => HtmlLinkDescriptor[];
};

function surfaceLinks(
  ...entities: (HtmlLinkDescriptor | LinksExported)[]
): () => HtmlLinkDescriptor[] {
  const result = entities
    .map((entity: HtmlLinkDescriptor | LinksExported) => {
      const htmlLinkDescriptor = entity as HtmlLinkDescriptor;
      if (htmlLinkDescriptor.rel && htmlLinkDescriptor.href) {
        return htmlLinkDescriptor;
      }
      const linkExported = entity as LinksExported;
      if (linkExported.links && typeof linkExported.links === "function") {
        return linkExported.links();
      }
      throw new Error("Bad entity found in surfacing links");
    })
    .flat();

  return () => result;
}

export default surfaceLinks;
