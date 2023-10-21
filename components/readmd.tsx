import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import React from 'react';

export default async function GetMarkdownContent (fileName: string): Promise<React.ReactElement> {

  const fullPath = path.join(`./markdown/${fileName}`);
  
  const mdContent = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark()
    .use(html)
    .process(mdContent);
  const contentHtml = processedContent.toString();

  return contentHtml as unknown as React.ReactElement;
}