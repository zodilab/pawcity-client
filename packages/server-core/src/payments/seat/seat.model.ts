import { Sequelize, Model } from 'sequelize'
import { Application } from '../../../declarations'
import { SeatInterface } from '@xrengine/common/src/dbmodels/Seat'

export default (app: Application) => {
  const sequelizeClient: Sequelize = app.get('sequelizeClient')
  const seat = sequelizeClient.define<Model<SeatInterface>>(
    'seat',
    {},
    {
      hooks: {
        beforeCount(options: any): void {
          options.raw = true
        }
      }
    }
  )

  ;(seat as any).associate = (models: any): void => {
    ;(seat as any).belongsTo(models.subscription, { foreignKey: { name: 'subscriptionId', allowNull: false } })
    ;(seat as any).belongsTo(models.user, { foreignKey: { name: 'userId', allowNull: false } })
    ;(seat as any).belongsTo(models.seat_status, { foreignKey: { name: 'seatStatus', allowNull: false } })
  }

  return seat
}
