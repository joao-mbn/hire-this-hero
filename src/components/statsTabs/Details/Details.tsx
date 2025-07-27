import type { Character } from "@/data/types";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Attributes } from "./Attributes";
import { Languages } from "./Languages";
import { Skills } from "./Skills";

export function Details({ character }: { character: Character }) {
  return (
    <div className="flex flex-col gap-6">
      <Attributes />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Skills />

        <div className="space-y-6">
          <Languages />

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="rune-text font-uncial text-xl text-primary">
                Immunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {character.immunities.length > 0 ? (
                  character.immunities.map((immunity, index) => (
                    <Badge
                      key={index}
                      variant="destructive"
                      className="font-cinzel"
                    >
                      {immunity}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No immunities</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="rune-text font-uncial text-xl text-primary">
                Resistances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {character.resistances.length > 0 ? (
                  character.resistances.map((resistance, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="font-cinzel"
                    >
                      {resistance}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No resistances
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="rune-text font-uncial text-xl text-primary">
                Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {character.weaknesses.length > 0 ? (
                  character.weaknesses.map((weakness, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-orange-500 font-cinzel text-orange-600"
                    >
                      {weakness}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No weaknesses</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
