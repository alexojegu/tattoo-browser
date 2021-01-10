declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";

    const GraphicSvg: FunctionComponent<SVGProps<SVGSVGElement>>;

    export default GraphicSvg;
}
