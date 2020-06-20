import {Command} from '@oclif/command'

import {
  main
} from "@angular-devkit/schematics-cli/bin/schematics"

export type SchematicsCommand = "setup" | "handler"
export abstract class CommandWithSchematics extends Command  {
  private readonly collectionName = '@talkyjs/schematics'
  public async executeSchematics(command: SchematicsCommand,...options: string[]) {
    const args = [
      [
        this.collectionName,
        command,
      ].join(":"),
      ...options,
    ]
    await main({
      args
    })
  }  
}