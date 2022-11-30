import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getAll(query) { // query allows people to filter through your find
    const cars = await dbContext.Cars.find(query).sort('-createdAt').limit(20) //find all cars if not passed anything. sort() sorts by these values (-makes it ascending). .limit can be used to limit results
    return cars
  }

  async create(carData) {
    const newCar = await dbContext.Cars.create(carData)
    return newCar
  }

  async remove(id) {
    const car = await dbContext.Cars.findById(id)
    if (!car) throw new BadRequest('no car at id:' + id)
    await car.remove()
    return `deleted ${car.make} ${car.model}`
  }

  async update(id, carData) {
    const original = await dbContext.Cars.findById(id)
    // const updated = await dbContext.Cars.findByIdAndUpdate(id, carData) this works and is ok
    if (!original) throw new BadRequest('no car at id' + id)
    // NOTE you can leave anything out that you dont want the user to be able to change
    // original.make = carData.make ? carData.make : original.make
    // original.model = carData.model ? carData.model : original.model
    original.price = carData.price !== undefined ? carData.price : original.price // best case to handle numbers and bools, anything that can be saved as a false value.

    original.imgUrl = carData.imgUrl ? carData.imgUrl : original.imgUrl
    original.year = carData.year !== undefined ? carData.year : original.year
    original.description = carData.description ? carData.description : original.description
    original.color = carData.color ? carData.color : original.color
    return original
  }
}


export const carsService = new CarsService()