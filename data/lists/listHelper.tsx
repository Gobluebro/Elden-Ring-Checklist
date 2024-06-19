export const StyledLink = (href: string, text: string) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      className="underline dark:text-elden-ring-green-150"
    >
      {text}
    </a>
  );
};
