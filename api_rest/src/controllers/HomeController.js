import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Marques',
      email: 'lucaspoletis@gmail.com',
      idade: 31,
      peso: 98,
      altura: 1.86

    });
    res.json(novoAluno);
  }
}

export default new HomeController();
