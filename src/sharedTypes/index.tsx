import React from 'react'
import { CombinedState, Reducer } from 'redux'

export type genInfoReducer = {
  site_subtitle: String
}

export type usrInfoReducer = {
  user_name: string
  user_name_error: string
  user_password: string
  user_password_error: string
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

export type generic_form_func = (e: React.FormEvent<HTMLFormElement>) => void
export type submit_button_func = React.MouseEventHandler<HTMLButtonElement>
export type generic_action_object = { type: string; payload: any }
