interface RenderingPlatform {
    render(content: string): void;
}

class WindowsRenderer implements RenderingPlatform {
    render(content: string): void {
        console.log(`Renderizando no Windows: ${content}`);
    }
}

class LinuxRenderer implements RenderingPlatform {
    render(content: string): void {
        console.log(`Renderizando no Linux: ${content}`);
    }
}

class MacOSRenderer implements RenderingPlatform {
    render(content: string): void {
        console.log(`Renderizando no macOS: ${content}`);
    }
}

class AndroidRenderer implements RenderingPlatform {
    render(content: string): void {
        console.log(`Renderizando no Android: ${content}`);
    }
}

abstract class DrawingFormat {
    constructor(protected platform: RenderingPlatform) {}

    abstract draw(): void;
}

class VectorDrawing extends DrawingFormat {
    draw(): void {
        this.platform.render("Desenho vetorial");
    }
}

class BitmapDrawing extends DrawingFormat {
    draw(): void {
        this.platform.render("Desenho bitmap");
    }
}

class ThreeDDrawing extends DrawingFormat {
    draw(): void {
        this.platform.render("Desenho em 3D");
    }
}

const vectorOnWindows = new VectorDrawing(new WindowsRenderer());
vectorOnWindows.draw();

const bitmapOnLinux = new BitmapDrawing(new LinuxRenderer());
bitmapOnLinux.draw();

const threeDOnMac = new ThreeDDrawing(new MacOSRenderer());
threeDOnMac.draw();

const threeDOnAndroid = new ThreeDDrawing(new AndroidRenderer());
threeDOnAndroid.draw();
  