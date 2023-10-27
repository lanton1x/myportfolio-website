import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import React, { ReactElement } from 'react';
import DOMPurify from 'dompurify';

export default async function GetMarkdownContent (fileName: string): Promise<React.ReactElement> {

  const dirRelativeToPublicFolder = 'markdown';
  const mdDirPath = path.resolve('./public', dirRelativeToPublicFolder);
  
  const mdFilePath = path.join(`${mdDirPath}/${fileName}`);
  console.log('mdFilePath: ', mdFilePath);

  const mdContent = fs.readFileSync(mdFilePath, 'utf8');

  const processedContent = await remark()
    .use(html)
    .process(mdContent);

  const contentHtml = processedContent.toString();

  return contentHtml as unknown as React.ReactElement;
}