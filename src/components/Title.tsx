export default function Title({
  title,
  children,
}: {
  title: number;
  children: any;
}) {
  let content = "";
  for (let i = 0; i < title; i++) {
    content += "#";
    console.log(content);
  }
  return <h2 className={` before:mr-1`}>{children}</h2>;
}
