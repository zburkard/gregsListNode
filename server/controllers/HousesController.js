import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
      .put('/:id', this.update)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const houses = await housesService.getAll(query)
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const house = await housesService.create(req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const message = await housesService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next) {
    try {
      const updated = await housesService.update(req.params.id, req.body)
      return res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}