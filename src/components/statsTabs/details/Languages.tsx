import {
  Container,
  Description,
  Progress,
  ProgressIndicator,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "@/components/base/";
import { CardLine } from "@/components/base/cardLine";
import { BrokenSkull } from "@/components/icons/BrokenSkull";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { CefrLevelToDescription } from "@/data/maps";
import type { Language } from "@/data/types";
import { cn, LANGUAGE_DEBUFF_REGRESS, MAX_LANGUAGE_LEVEL } from "@/lib/utils";
import { MessagesSquare } from "lucide-react";
import { CardContent } from "../../base/";

export function Languages() {
  const character = useCharacterContext();

  return (
    <Container title="Languages" icon={<MessagesSquare />}>
      <CardContent>
        {character.languages
          .sort((a, b) => b.level - a.level)
          .map((language, index) => (
            <CardLine key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-1 cursor-pointer items-center gap-3">
                    <span className="min-w-24 text-old-gold-950">
                      {language.name}
                    </span>
                    <LanguageLevelProgress language={language} />
                  </div>
                </TooltipTrigger>

                <LanguageTooltipContent language={language} />
              </Tooltip>

              <UnderusageDebuffTooltip language={language} />
            </CardLine>
          ))}
      </CardContent>
    </Container>
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
          language.level === MAX_LANGUAGE_LEVEL && "maxed-out",
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
                var(--color-red-700) 2px,
                var(--color-red-700) 4px
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

function LanguageTooltipContent({ language }: LanguageContentProps) {
  return (
    <TooltipContent className="min-w-md">
      <TooltipContentHeader title={language.name} />
      <div className="flex items-center justify-between gap-2 pb-2">
        <Description
          description={`Level: ${language.level}/${MAX_LANGUAGE_LEVEL} ${language.cefrLevel === "Native" ? "• Native" : `• CEFR: ${language.cefrLevel}`}`}
          withoutDivider
        />
        {language.underusageDebuff?.active && <UnderusageDebuffIcon />}
      </div>
      <LanguageLevelProgress language={language} />
      <Description
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
        <div className="cursor-pointer">
          <UnderusageDebuffIcon />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Underusage debuff" />
        <Description
          description={language.underusageDebuff.description}
          withoutDivider
        />
      </TooltipContent>
    </Tooltip>
  );
}

function UnderusageDebuffIcon() {
  return (
    <BrokenSkull
      svgProps={{ className: "h-4 w-4" }}
      pathsProps={[{ className: "fill-red-700" }]}
    />
  );
}
