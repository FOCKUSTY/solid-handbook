import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMdxComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("path");

type Properties = {
  params: Promise<{ path: string[] }>;
};

export const generateMetadata = async (properties: Properties) => {
  const { path } = await properties.params;
  const { metadata } = await importPage(path);

  return metadata;
};

const Wrapper = getMdxComponents().wrapper;

const Page = async (properties: Properties) => {
  const { path } = await properties.params;
  const result = await importPage(path);

  const { default: MDXContent, toc, metadata } = result;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...properties} params={properties.params} />
    </Wrapper>
  );
};

export default Page;
