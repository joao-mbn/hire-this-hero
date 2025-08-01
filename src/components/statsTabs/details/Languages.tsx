import {
  BlockCard,
  Progress,
  ProgressIndicator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/";
import { BrokenSkull } from "@/components/icons/BrokenSkull";
import { TooltipContentResultDescription } from "@/components/TooltipContentResultDescription";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { CefrLevelToDescription } from "@/data/maps";
import type { Language } from "@/data/types";
import { cn, LANGUAGE_DEBUFF_REGRESS, MAX_LANGUAGE_LEVEL } from "@/lib/utils";
import { MessagesSquare } from "lucide-react";
import { CardContent } from "../../base/";

export function Languages() {
  const character = useCharacterContext();

  return (
    <BlockCard title="Languages" icon={<MessagesSquare />}>
      <CardContent>
        {character.languages
          .sort((a, b) => b.level - a.level)
          .map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-border/30 px-3 pt-2 text-muted-foreground not-last:border-b not-last:pb-2"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-1 items-center gap-3">
                    <span className="min-w-24 text-foreground">
                      {language.name}
                    </span>
                    <LanguageLevelProgress language={language} />
                  </div>
                </TooltipTrigger>

                <LanguageContent language={language} />
              </Tooltip>

              <UnderusageDebuffTooltip language={language} />
            </div>
          ))}
      </CardContent>
    </BlockCard>
  );
}

interface LanguageLevelProgressProps {
  language: Language;
  className?: string;
}

function LanguageLevelProgress({
  language,
  className,
}: LanguageLevelProgressProps) {
  const debuffRegress = Math.min(language.level, LANGUAGE_DEBUFF_REGRESS);

  const levelBarWidth = Math.round((language.level * 100) / MAX_LANGUAGE_LEVEL);
  const debuffBarWidth = Math.round((debuffRegress * 100) / MAX_LANGUAGE_LEVEL);

  /**
   * TranslateX necessary to put the right-end of debuff indicator starting at the right end of the level indicator.
   */
  const debuffBarTranslation =
    ((levelBarWidth - debuffBarWidth) / debuffBarWidth) * 100;

  return (
    <Progress className={cn("h-2 w-full", className)}>
      <ProgressIndicator
        className={cn(
          "h-full",
          language.level === MAX_LANGUAGE_LEVEL && "gradient-flow maxed-out",
        )}
        style={{ width: `${levelBarWidth}%` }}
      />
      {language.underusageDebuff?.active && (
        <ProgressIndicator
          className="h-full -translate-y-2"
          style={{
            transform: `translateX(${debuffBarTranslation}%)`,
            width: `${debuffBarWidth}%`,
            background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgb(239 68 68) 2px,
                rgb(239 68 68) 4px
              )`,
          }}
        />
      )}
    </Progress>
  );
}

interface LanguageContentProps {
  language: Language;
}

function LanguageContent({ language }: LanguageContentProps) {
  return (
    <TooltipContent>
      <TooltipContentResultDescription
        results={
          <div className="flex w-xs flex-col gap-1 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-muted-foreground">
                Level: {language.level}/{MAX_LANGUAGE_LEVEL}
                {language.cefrLevel && language.cefrLevel === "Native"
                  ? ` • Native`
                  : ` • CEFR: ${language.cefrLevel}`}
              </span>
              {language.underusageDebuff?.active && (
                <BrokenSkull
                  svgProps={{ className: "h-4 w-4 ml-auto" }}
                  pathsProps={[{ className: "fill-muted-foreground" }]}
                />
              )}
            </div>
            <LanguageLevelProgress className="min-w-48" language={language} />
          </div>
        }
        title={language.name}
        description={
          language.cefrLevel
            ? `${CefrLevelToDescription[language.cefrLevel]}` +
              (language.description ? `\n\n${language.description}` : "")
            : language.description || ""
        }
      />
    </TooltipContent>
  );
}

interface UnderusageDebuffTooltipProps {
  language: Language;
}

function UnderusageDebuffTooltip({ language }: UnderusageDebuffTooltipProps) {
  if (!language.underusageDebuff?.active) {
    return <div className="h-4 w-4" />;
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <BrokenSkull
          svgProps={{ className: "h-4 w-4" }}
          pathsProps={[{ className: "fill-muted-foreground" }]}
        />
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-xs">
          <p className="mb-2 font-semibold">Underusage debuff:</p>
          <p className="mt-2 text-sm whitespace-pre-line text-muted-foreground">
            {language.underusageDebuff.description}
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
