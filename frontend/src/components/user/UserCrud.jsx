import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import './UserCrud.css'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro  de  usuários: Incluir, Listar, Alterar e Excluir'
}
const baseUrl = 'http://localhost:3333'

export default function (props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])
    let [count, setCount] = useState(0)

    function renderTable(data) {
        return (
            <table className=" text-center table mt-4 ">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRow(data)}
                </tbody>
            </table>
        )
    }
    function renderRow(data) {
        return data.map(user => {
            return (
                <tr className="text-center" key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => update(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => remove(user.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    async function update(user) {
        try {
            await axios.put(`${baseUrl}/users/${user.id}`, {
                name: name,
                email: email
            })
            setEmail('')
            setName('')
            setCount(count += 1)
        } catch (error) {
            alert(error)
        }
    }
    async function remove(user) {
        try {
            await axios.delete(`${baseUrl}/users/${user}`)
            setCount(count += 1)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        try {
            async function fetchData() {
                const result = await axios.get(`${baseUrl}/users`);
                setData(result.data);
            }
            fetchData();
        } catch (error) {
            console.log(error)
        }
    }, [count]);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const data = { name, email }
            await axios.post(`${baseUrl}/users`, data)
            setEmail('')
            setName('')
            setCount(count += 1)
            alert('Cadastrado com sucesso')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Main {...headerProps}>
            <div className='form-group'>
                <form className='d-flex' onSubmit={handleSubmit}>
                    <input
                        className='mr-4 form-control'
                        placeholder="Nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='mr-3 form-control'
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type='submit' className="btn btn-success">Cadastrar</button>
                </form>
            </div>
            {renderTable(data)}
        </Main>)
}
