function imageSource(args: ImageSourceArgs): Pick<HTMLImageElement, "src"> {
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

function mapSource(args: MapSourceArgs): Pick<HTMLImageElement, "src"> {
    const url = new URL("static", process.env.MAP_URL);

    url.searchParams.set("center", args.location.join());
    url.searchParams.set("size", `${args.width}x${args.height}`);

    url.searchParams.set("zoom", "13");
    url.searchParams.set("format", "png");

    url.searchParams.set("access-token", String(process.env.MAP_KEY));

    return { src: url.toString() };
}

export default function imageAttribute(args: ImageAttributeArgs): Pick<HTMLImageElement, "src"> {
    switch (args.kind) {
        case "image":
            return imageSource(args);
        case "map":
            return mapSource(args);
    }
}

export type ImageAttributeArgs = ImageSourceArgs | MapSourceArgs;

interface ImageSourceArgs {
    kind: "image";
    image: string;
    width?: number;
    height?: number;
}

interface MapSourceArgs {
    kind: "map";
    location: number[];
    width: number;
    height: number;
}
