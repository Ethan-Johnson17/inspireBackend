import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router.get('', this.getAll)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const tasks = await tasksService.getAll(query)
      return res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const tasksResult = await tasksService.getById(res.params.id)
      return res.send(tasksResult)
    } catch (error) {
      next(error)
    }
  }
}
