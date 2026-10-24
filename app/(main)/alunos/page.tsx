import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function Alunos() {

    const alunos = [
        { matricula: "202620001", nome: "João Silva", dataNasc: "2000-01-15", email:"joaosilva@gmail.com"},
        { matricula: "202620002", nome: "Maria Soares", dataNasc: "2001-07-11", email:"maria.soares@gmail.com"},
        { matricula: "202620003", nome: "José Silveira", dataNasc: "2002-05-25", email:"josesilveira@gmail.com"}
    ]

    return (
        <DataTable emptyMessage="Nenhum aluno encontrado"
            value={alunos}>
            <Column header= "Matrícula" field= "matricula"></Column>
            <Column header= "Nome" field= "nome"></Column>
            <Column header= "Data Nascimento" field= "dataNasc"></Column>
            <Column header= "E-mail" field= "email"></Column>
        </DataTable>
    )
}