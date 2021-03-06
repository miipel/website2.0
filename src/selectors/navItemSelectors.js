import createCachedSelector from 're-reselect'
import { INITIAL_ID, NEW_ITEM_URL_KEYWORD } from '../constants'

const parseId = id => id === NEW_ITEM_URL_KEYWORD ? INITIAL_ID : Number(id)

const getNavItemFromArguments = arg => arg.siteNavigation ? arg.siteNavigation.records : arg

export const findNavItemByPath = createCachedSelector(
  getNavItemFromArguments,
  (state, path) => path,
  (navItems, path) => navItems.find(navItem => navItem.path === path)
)((state, path) => path)

export const findNavItemById = createCachedSelector(
  getNavItemFromArguments,
  (state, navItemId) => parseId(navItemId),
  (navItems, navItemId) => {
    return navItems.find(navItem => navItem.id === navItemId)
  }
)((state, navItemId) => navItemId)

export const getNavItemsForChooser = createCachedSelector(
  getNavItemFromArguments,
  (state, navItemId) => parseId(navItemId),
  (navItems, navItemId) =>
    navItems.filter(navItem => navItem.id !== navItemId && !navItem.parentId)
)((state, navItemId) => navItemId)
