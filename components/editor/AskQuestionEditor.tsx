"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  codeBlockPlugin,
  codeMirrorPlugin,
  CodeToggle,
  ConditionalContents,
  headingsPlugin,
  imagePlugin,
  InsertCodeBlock,
  InsertImage,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorProps,
  quotePlugin,
  Separator,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { basicDark } from "cm6-theme-basic-dark";
import { basicLight } from "cm6-theme-basic-light";
import { useTheme } from "next-themes";
import React, { useMemo } from "react";

interface AskAQuestionEditorProps {
  value: string;
  onChange: (markdown: string) => void;
}

export const AskAQuestionEditor: React.FC<AskAQuestionEditorProps> = ({ value, onChange }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const themeExtension = useMemo(() => (isDark ? [basicDark] : [basicLight]), [isDark]);

  const plugins: MDXEditorProps["plugins"] = useMemo(
    () => [
      toolbarPlugin({
        toolbarContents: () => (
          <ConditionalContents
            options={[
              {
                when: (editor) => editor?.editorType === "codeblock",
                contents: () => <ChangeCodeMirrorLanguage />,
              },
              {
                fallback: () => (
                  <>
                    <UndoRedo />
                    <Separator />
                    <BoldItalicUnderlineToggles />
                    <CodeToggle />
                    <Separator />
                    <BlockTypeSelect />
                    <ListsToggle />
                    <Separator />
                    <InsertImage />
                    <Separator />
                    <InsertCodeBlock />
                  </>
                ),
              },
            ]}
          />
        ),
      }),
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      linkPlugin(),
      imagePlugin(),
      codeBlockPlugin({ defaultCodeBlockLanguage: "ts" }),
      codeMirrorPlugin({
        codeBlockLanguages: {
          txt: "Plain text",
          js: "JavaScript",
          ts: "TypeScript",
          jsx: "JavaScript React",
          tsx: "TypeScript React",
          json: "JSON",
          css: "CSS",
          html: "HTML",
          bash: "Bash",
        },
        autoLoadLanguageSupport: true,
        codeMirrorExtensions: themeExtension,
      }),
      markdownShortcutPlugin(),
    ],
    [themeExtension]
  );

  return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value}
      onChange={onChange}
      plugins={plugins}
      className="ask-editor mdxeditor border-light-300 dark:border-dark-300 mt-2 w-full overflow-hidden rounded-2xl border"
      contentEditableClassName="min-h-[220px] w-full bg-light-200 px-4 py-3 text-sm text-slate-900 focus:outline-none dark:bg-dark-200 dark:text-slate-100"
    />
  );
};
