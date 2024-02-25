declare module "*.scss" {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
