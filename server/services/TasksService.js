import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class TasksService {
  async getAll(query = {}) {
    const res = await dbContext.Tasks.find({}).populate('creator')
    logger.log(res)
    return res
  }

  async getById(id) {
    const found = await dbContext.Tasks.findById(id).populate('creator')
    if (!found) {
      throw new BadRequest('That ID does not exist, bro.')
    }
    return found
  }
}

export const tasksService = new TasksService()
