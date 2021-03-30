import React from 'react'
import { CombinedState, Reducer } from 'redux'

export type genInfoReducer = {
  site_subtitle: String
}

export type usrInfoReducer = {
  user_name: string
  user_password: string
  is_logged_in: boolean
}

/** setup rootstate type */
export type RootState = ReturnType<
  Reducer<
    CombinedState<{
      genInfo: genInfoReducer
      userInfo: usrInfoReducer
    }>,
    any
  >
>
export type generic_input_func = (
  e: React.ChangeEvent<HTMLInputElement>
) => void
export type generic_action_object = { type: string; payload: any }
