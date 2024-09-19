type typeElement = "" | "password" | "folder";

export type DataHeaderMainItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  typeElement: typeElement;
  text: string;
};


export type HeaderMainProps ={
  userId:string
}