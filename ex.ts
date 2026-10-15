class Pratos {
    constructor(
        public id: number,
        public nome: string,
        public validade: string,
        public nacionalidade: string,
    ) { }
}

class Funcionario {
    constructor(
        public id: number,
        public nome: string,
        public sexo: string,
        public dataContratacao: string,
        public cpf: string,
        public rg: string,
        public salario: number,
    ) { }
}

class Freelancer extends Funcionario {
    constructor(
        id: number,
        nome: string,
        sexo: string,
        data: string,
        cpf: string,
        rg: string,
        salario: number,
        public dataFim: string,
        public valorHora: number
    ) {
        super(id, nome, sexo, data, cpf, rg, salario)
    }

    contratoAtivo(): boolean {
        return new Date(this.dataFim) >= new Date();
    }

    calcularSalario(horas: number): number {
        return this.valorHora * horas;
    }
}

class Entrega {
    constructor(
        public id: number,
        public pedido: number,
        public dataSaida: string,
        public endereco: string,
    ) { }
}

class Repository<T> {
    dados: T[] = [];

    adicionar(item: T): void {
        this.dados.push(item);
    }

    listar(): T[] {
        return this.dados;
    }
}

const pratos = new Repository<Pratos>();
const funcionarios = new Repository<Funcionario>();
const entregas = new Repository<Entrega>();

pratos.adicionar(
    new Pratos(1, "Feijoada", "20/10/2026", "Brasil")
);

funcionarios.adicionar(
    new Funcionario(1, "Carlos", "Masculino", "20/10/2023", "683.655.400-61", "19.634.150-4", 4000)
);

const ana = new Freelancer(2, "Ana", "F", "01/09/2026",
    "98765432100", "SP987", 0,
    "31/12/2026", 50);

funcionarios.adicionar(ana);

entregas.adicionar(
    new Entrega(1, 1001, "14/10/2026 18:00", "Rua aura, 67")
);

console.log("PRATOS")
pratos.listar().forEach(p => console.log(p));

console.log("FUNCIONARIOS")
funcionarios.listar().forEach(f => console.log(f));

console.log("ENTREGAS")
entregas.listar().forEach(e => console.log(e));

console.log("Salarios")
console.log("Carlos: R$ 4000")
console.log("Ana: (40 horas): R%" + ana.calcularSalario(40))
console.log("CONTRATO FREELANCER")
console.log("Ana esta com contrato ativo: " + ana.contratoAtivo());