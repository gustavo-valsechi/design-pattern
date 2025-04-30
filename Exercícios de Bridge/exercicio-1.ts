interface MediaAPI {
    play(): void;
    pause(): void;
    stop(): void;
}

class BasicAPI implements MediaAPI {
    play(): void {
        console.log("BasicAPI: reproduzindo mídia...");
    }

    pause(): void {
        console.log("BasicAPI: pausando mídia...");
    }

    stop(): void {
        console.log("BasicAPI: parando mídia...");
    }
}

class PremiumAPI implements MediaAPI {
    play(): void {
        console.log("PremiumAPI: iniciando reprodução com alta qualidade...");
    }

    pause(): void {
        console.log("PremiumAPI: pausa inteligente ativada...");
    }

    stop(): void {
        console.log("PremiumAPI: encerrando reprodução com fade-out...");
    }
}

class ProfessionalAPI implements MediaAPI {
    play(): void {
        console.log("ProfessionalAPI: reprodução profissional iniciada.");
    }

    pause(): void {
        console.log("ProfessionalAPI: reprodução pausada com marcação de tempo.");
    }

    stop(): void {
        console.log("ProfessionalAPI: mídia finalizada com salvamento automático.");
    }
}

abstract class MediaPlayer {
    constructor(protected api: MediaAPI) {}

    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log("MusicPlayer: tocando música...");
        this.api.play();
    }

    pause(): void {
        console.log("MusicPlayer: pausa na música.");
        this.api.pause();
    }

    stop(): void {
        console.log("MusicPlayer: música parada.");
        this.api.stop();
    }
}

class VideoPlayer extends MediaPlayer {
    play(): void {
        console.log("VideoPlayer: iniciando vídeo...");
        this.api.play();
    }

    pause(): void {
        console.log("VideoPlayer: vídeo pausado.");
        this.api.pause();
    }

    stop(): void {
        console.log("VideoPlayer: vídeo finalizado.");
        this.api.stop();
    }
}

class PodcastPlayer extends MediaPlayer {
    play(): void {
        console.log("PodcastPlayer: reproduzindo episódio...");
        this.api.play();
    }

    pause(): void {
        console.log("PodcastPlayer: episódio pausado.");
        this.api.pause();
    }

    stop(): void {
        console.log("PodcastPlayer: episódio encerrado.");
        this.api.stop();
    }
}

class AudiobookPlayer extends MediaPlayer {
    play(): void {
        console.log("AudiobookPlayer: iniciando audiobook...");
        this.api.play();
    }

    pause(): void {
        console.log("AudiobookPlayer: pausando audiobook.");
        this.api.pause();
    }

    stop(): void {
        console.log("AudiobookPlayer: audiobook parado.");
        this.api.stop();
    }
}

const player1 = new MusicPlayer(new BasicAPI());
player1.play();
player1.pause();
player1.stop();

console.log("\n---\n");

const player2 = new VideoPlayer(new PremiumAPI());
player2.play();
player2.pause();
player2.stop();

console.log("\n---\n");

const player3 = new AudiobookPlayer(new ProfessionalAPI());
player3.play();
player3.pause();
player3.stop();
  