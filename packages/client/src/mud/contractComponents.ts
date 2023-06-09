/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    TestComponent: (() => {
      const tableId = new TableId("", "TestComponent");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ObstructionComponent: (() => {
      const tableId = new TableId("", "ObstructionCompo");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    NFTComponent: (() => {
      const tableId = new TableId("", "NFTComponent");
      return defineComponent(
        world,
        {
          hp: RecsType.BigInt,
          atk: RecsType.BigInt,
          def: RecsType.BigInt,
          mp: RecsType.BigInt,
          dama: RecsType.BigInt,
          spd: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    PlayerComponent: (() => {
      const tableId = new TableId("", "PlayerComponent");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    PositionComponent: (() => {
      const tableId = new TableId("", "PositionComponen");
      return defineComponent(
        world,
        {
          x: RecsType.BigInt,
          y: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    PlayerInfoComponent: (() => {
      const tableId = new TableId("", "PlayerInfoCompon");
      return defineComponent(
        world,
        {
          exploreBlock: RecsType.BigInt,
          updateTimestamp: RecsType.BigInt,
          state: RecsType.Number,
          energy: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapComponent: (() => {
      const tableId = new TableId("", "MapComponent");
      return defineComponent(
        world,
        {
          blockSize: RecsType.BigInt,
          width: RecsType.BigInt,
          height: RecsType.BigInt,
          seed: RecsType.BigInt,
          denom: RecsType.BigInt,
          stepLimit: RecsType.BigInt,
          energyMax: RecsType.BigInt,
          moveCost: RecsType.BigInt,
          exploreBlockLimit: RecsType.BigInt,
          restoreEnergy: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
