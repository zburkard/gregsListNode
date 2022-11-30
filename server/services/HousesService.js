import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class HousesService {

  async getAll() {
    const houses = await dbContext.Houses.find()
    return houses
  }

  async create(houseData) {
    const newHouse = await dbContext.Houses.create(houseData)
    return newHouse
  }

  async remove(id) {
    const house = await dbContext.Houses.findById(id)
    if (!house) throw new BadRequest('no house at id:' + id)
    await house.remove()
    return `deleted ${house.description}`
  }

  async update(id, houseData) {
    // const original = await dbContext.Houses.findByIdAndUpdate(id, houseData)
    const original = await dbContext.Houses.findById(id)
    if (!original) throw new BadRequest('no house at' + id)
    original.price = houseData.price ? houseData.price : original.price
    original.imgUrl = houseData.imgUrl ? houseData.price : original.imgUrl
    original.description = houseData.description ? houseData.description : original.description
    await original.save()
    return original
  }
}

export const housesService = new HousesService()