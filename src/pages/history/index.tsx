import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>há 25 minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Projeto 2</td>
              <td>há 50 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Projeto 3</td>
              <td>há 30 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
