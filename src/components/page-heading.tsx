import type { ReactNode } from "react";

export function PageHeading({ title, introduction, aside }: { title: string; introduction: string; aside?: ReactNode }) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      <div className="page-heading__copy">
        <p>{introduction}</p>
        {aside}
      </div>
    </header>
  );
}
