export function imageApi(args: ImageApiArgs): Pick<HTMLImageElement, "src"> {
    const url = new URL(args.image, process.env.IMAGE_URL);

    if (args.width) {
        url.searchParams.set("w", String(args.width));
    }

    if (args.height) {
        url.searchParams.set("h", String(args.height));
    }

    url.searchParams.set("auto", "format,compress");
    url.searchParams.set("fit", "crop");

    return { src: url.toString() };
}

export function mapApi(args: MapApiArgs): Pick<HTMLImageElement, "src"> {
    const url = new URL("static", process.env.MAP_URL);

    url.searchParams.set("access-token", String(process.env.MAP_KEY));

    url.searchParams.set("center", args.location.join());
    url.searchParams.set("size", `${args.width}x${args.height}`);

    url.searchParams.set("zoom", "13");
    url.searchParams.set("format", "png");

    return { src: url.toString() };
}

export interface ImageApiArgs {
    image: string;
    width?: number;
    height?: number;
}

export interface MapApiArgs {
    location: number[];
    width: number;
    height: number;
}
