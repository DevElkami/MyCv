import { create } from "zustand";
import { extractFromXml, FeedEntry } from '@extractus/feed-extractor'

export interface IFeedState {
    feedsBlog: FeedEntry[] | undefined;
    feedsClimb: FeedEntry[] | undefined;
    initFeedsBlog: boolean;
    initFeedsClimb: boolean;
    getFeeds: () => Promise<IFeedState | undefined>;
}

export const UseFeedsStore = create<IFeedState>((set, get) => ({
    feedsBlog: undefined,
    feedsClimb: undefined,
    initFeedsBlog: false,
    initFeedsClimb: false,
    getFeeds: async () => {
        try {
            if (get().initFeedsBlog != true) {
                let entriesBlog: FeedEntry[] | undefined = undefined;
                await fetch('/blog/')
                    .then(response => {
                        response.text().then(xml => {
                            const feed = extractFromXml(xml);
                            if (feed.entries) {
                                entriesBlog = feed.entries.slice(1, 4);
                                set(() => ({
                                    feedsBlog: entriesBlog,
                                    initFeedsBlog: true
                                }));
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }

            if (get().initFeedsClimb != true) {                
                let entriesClimb: FeedEntry[] | undefined = undefined;
                await fetch('/climb/')
                    .then(response => {
                        response.text().then(xml => {
                            const feed = extractFromXml(xml);
                            if (feed.entries) {
                                entriesClimb = feed.entries.slice(1, 4);
                                set(() => ({
                                    feedsClimb: entriesClimb,
                                    initFeedsClimb: true
                                }));
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }

            const feedState = {} as IFeedState | undefined
            return feedState;
        }
        catch (err) {
            set(() => ({
                feedsBlog: undefined,
                feedsClimb: undefined,
                init: undefined
            }));
        }
    }
}));
