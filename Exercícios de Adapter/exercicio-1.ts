class DataLocal {
    private data: string;
  
    constructor(data: string) {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
            throw new Error("Formato inválido, esperado DD/MM/YYYY");
        }
        this.data = data;
    }
  
    getData(): string {
        return this.data;
    }
}

class DataExterna {
    private data: string;

    constructor(data: string) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
            throw new Error("Formato inválido, esperado YYYY-MM-DD");
        }
        this.data = data;
    }

    getData(): string {
        return this.data;
    }
}

class DataAdapter extends DataLocal {
    private externa: DataExterna;

    constructor(externalData: DataExterna) {
        const dataConvertida = DataAdapter.converterParaFormatoLocal(externalData.getData());
        super(dataConvertida);
        this.externa = externalData;
    }

    static converterParaFormatoLocal(yyyyMMdd: string): string {
        const [yyyy, mm, dd] = yyyyMMdd.split("-");
        return `${dd}/${mm}/${yyyy}`;
    }

    static converterParaFormatoExterno(ddMMyyyy: string): string {
        const [dd, mm, yyyy] = ddMMyyyy.split("/");
        return `${yyyy}-${mm}-${dd}`;
    }

    getDataExterna(): string {
        return this.externa.getData();
    }
}
  
const externa = new DataExterna("2024-12-31");
const adaptada = new DataAdapter(externa);

console.log("Formato local:", adaptada.getData());
console.log("Formato externo:", adaptada.getDataExterna());

const dataOriginal = new DataLocal("01/05/2025");
const convertido = DataAdapter.converterParaFormatoExterno(dataOriginal.getData());

console.log("Convertido para externo:", convertido);
