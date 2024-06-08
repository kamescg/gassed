import {
  FueletWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
} from "@fuels/connectors"
import { Fuel } from "fuels"

export const fuelConnectors = [
  new FuelWalletDevelopmentConnector(),
  new FueletWalletConnector(),
  new FuelWalletConnector(),
]

export const fuel = new Fuel({
  connectors: fuelConnectors
})
