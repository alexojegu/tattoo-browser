export function imageApi(args: ImageApiArgs): ImageApiData {
    const url = new URL(args.path, process.env.IMAGE_URL);

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

export interface ImageApiArgs {
    path: string;
    width?: number;
    height?: number;
}

export interface ImageApiData {
    src: string;
}
