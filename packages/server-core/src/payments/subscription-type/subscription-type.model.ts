import { Sequelize, DataTypes, Model } from 'sequelize'
import { Application } from '../../../declarations'
import { SubscriptionTypeInterface } from '@xrengine/common/src/dbmodels/SubscriptionType'

export default (app: Application) => {
  const sequelizeClient: Sequelize = app.get('sequelizeClient')
  const subscriptionType = sequelizeClient.define<Model<SubscriptionTypeInterface>>(
    'subscription_type',
    {
      plan: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options: any): void {
          options.raw = true
        }
      }
    }
  )

  ;(subscriptionType as any).associate = (models: any): void => {
    ;(subscriptionType as any).hasMany(models.subscription, { foreignKey: 'plan' })
  }

  return subscriptionType
}
