import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React, { useState } from "react"
import { Select } from "@medusajs/ui"

import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)
  const [selectedOption, setSelectedOption] = useState("")

  // console.log(JSON.stringify(selectedOption))

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        <div className=" w-full">
          <Select
            onValueChange={(val) => {
              updateOption({ [option.id]: val })
            }}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select " />
            </Select.Trigger>
            <Select.Content onClick={() => console.log("Hellooo")}>
              {filteredOptions.map((v, idx) => (
                <Select.Item
                  key={idx + 1}
                  value={v}
                  className={clx(
                    "border-ui-border-base bg-ui-bg-subtle mb-1 text-small-regular h-10 rounded-rounded px-4 py-2 flex-1 ",
                    {
                      "border-ui-border-interactive": v === current,
                      "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                        v !== current,
                    }
                  )}
                  disabled={disabled}
                  data-testid="option-button"
                >
                  {v}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>
        {/* {filteredOptions.map((v) => (
          <button
            onClick={() => {
              console.log(v)
              setSelectedOption(v)
              updateOption({ [option.id]: v })
            }}
            key={v}
            className={clx(
              "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
              {
                "border-ui-border-interactive": v === current,
                "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                  v !== current,
              }
            )}
            disabled={disabled}
            data-testid="option-button"
          >
            {v}
          </button>
        ))} */}
      </div>
    </div>
  )
}

export default OptionSelect
