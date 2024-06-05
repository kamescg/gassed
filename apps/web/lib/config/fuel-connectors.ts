import {
  FueletWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
} from "@fuels/connectors"
import { Fuel } from "fuels"

export const fuel = new Fuel({
  connectors: [
    new FuelWalletDevelopmentConnector(),
    new FueletWalletConnector(),
    new FuelWalletConnector(),
  ],
})
